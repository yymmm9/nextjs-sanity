import React from 'react'

function LessonTable(props) {
  const lessonName = props
  const lesson = props.lessons.title
  return(
    <div className="LessonTable">
      {lessonName.map(event => (
        <p>{event.id}</p>
      ))}
      <p>{lessonName}</p>
    </div>
  )
}

export default LessonTable;