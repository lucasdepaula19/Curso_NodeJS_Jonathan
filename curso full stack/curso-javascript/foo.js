let qtde = await new Promise(resolve => {
    queue.inactiveCount( ( err, total ) => {
        resolve(total)
      });
})


//....
if (qtde > 0) {
    
}