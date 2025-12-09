const failed = true;

const myPromise = new Promise ((res, rej) => {
    if (failed) rej("Promise failed");
    else res("Promise resolved");
});

function success (result){
    console.log(result);
}

function onFailed (error){
    console.log(error);
}

myPromise
.then((result) => {
    // print the resolve statement
    success(result)
})
.catch((error) => {
    // print the error (rej)
    onFailed(error)
})