const taskHandler = (err,task) => {
  try {
    // console.log(task);
    if(task == 0) {
      console.log("No task available");
    } else {
      pause();
      // console.log(`Task algorithm: ${task.algorithm}`);
      const data = task.data;
      const delta = Math.floor((task.expires - (new Date()))*0.8); // magic 0.8 - time saving for lags
      let progress = 0;
      const progressCallback = ()=>{progress++;};
      const reporter = () => {
        if(progress > 0) {
          Meteor.call("tasks.report", task.id, progress);
          progress = 0;
        } else {
          clearInterval(innerTimer);
          throw "Task too complex for me";
        }
      };
      const innerTimer = setInterval(reporter, delta);
      // console.log(data);
      const result = CalcCore(task.algorithm, data, progressCallback);
      if(result.type=="error")
        console.log(`Error: ${result.value}`);
      else console.log(result.value);
      // console.log(result);
      Meteor.call("tasks.resolve", task.id, result.value);
      clearInterval(innerTimer);
      start();
    }
  } catch (e) {
    start();
  }
}

const worker = () => {
  console.log("I'm working");
  Meteor.call("tasks.get", taskHandler);
};

let timer = null;
const start = () => { if(!timer) timer = setInterval(worker, 10000); };
const pause = () => { if(timer) clearInterval(timer); timer = null;}

module.exports = {start, pause};