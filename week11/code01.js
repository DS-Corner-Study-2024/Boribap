const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current, // 현재 ID를 사용
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 2; // ID를 2씩 증가
  };