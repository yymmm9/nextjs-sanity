import React from 'react'

function LessonTable(props) {
  const lessonName = props.lessons[0].lessonName
  return(
    <p>{lessonName}</p>
  )
}

export default LessonTable;