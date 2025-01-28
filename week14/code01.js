const listener = () => {
    console.log('상태가 업데이트됨');  
  }
  const unsubscribe = store.subscribe(listener); 
  
  unsubscribe();