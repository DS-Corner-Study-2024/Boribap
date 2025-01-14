return (
    <MemoContext.Provider>
      <div className="App">

        <MemoEditor onCreate={onCreate} />
        <div>전체 메모 개수 : {memo.length}</div>
        <div>중요표시한 메모의 개수 : {importantMemo}</div>
        <div>완료된 메모의 개수 : {finishedMemo}</div>

      </div>
    </MemoContext.Provider>
  );