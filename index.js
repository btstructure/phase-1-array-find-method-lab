// const superbowlWin = (records) => {
//     const result = records.find((record) => record.result === "W")
  
//     if (result) {
//         return result.year
//     }
//   }


  function superbowlWin(record){
      let result = record.find(res => res.result === "W")
      if (result){
          return result.year
      }
  }