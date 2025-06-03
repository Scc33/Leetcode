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
                // You can assume no callbacks passed to subscribe are referentially identical.
                const index = this.events[eventName].indexOf(callback);
                if (index > -1) {
                    this.events[eventName].splice(index, 1);
                    return undefined;
                }
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

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */