// This is very very close but it doesn't account for unsubscribing when something before it in the array has been removed... that throws the index off

type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {

    events = {};
    
    subscribe(eventName: string, callback: Callback): Subscription {
        
        if (!(eventName in this.events)) {
            this.events[eventName] = [];
        }
        let eventPosition = this.events[eventName].push(callback) - 1;

        return {
            unsubscribe: () => {
                this.events[eventName].splice(eventPosition, 1);

                return undefined;
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        if (eventName in this.events) {
            return this.events[eventName].reduce((accumulator, currentCallback) => {
                accumulator.push(currentCallback(...args));
                return accumulator;
            }, []);
        }

        return [];
    }
}
