import {BufferTask, DateTask} from "./block2-tasks";
import {TCallbackFunction} from "../utils";

// блок управляет тасками, и таски друг на друга не влияют
export function Block2Runner(callback: TCallbackFunction) {
    task6Wrapper();
    function task6Wrapper(){
        DateTask(()=> {
            task7Wrapper();
        });
    }
    function task7Wrapper(){
        BufferTask(()=> {
            callback();
        });
    }
}
