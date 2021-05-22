import { Observable } from 'rxjs';

const hello = Observable.create((observer: any) => {
    try {
        observer.next('Hello');
        observer.next('World');
        setInterval(() => {
            observer.next("Interval")
        }, 2000)
        // observer.complete();
    } catch (error) {
        observer.error(error)
    }
});

let observer = hello.subscribe(
    (arg: any) => addItem(arg),
    (error: any) => addItem(error),
    () => addItem("Completed")
)

setTimeout(() => {
    observer.unsubscribe();
}, 6001)

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


