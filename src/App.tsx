import React, { Dispatch } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AddSkill } from './components/AddSkill';
import { Skill } from './components/Skill';


const App: React.FC = () => {
  const skills: readonly Skill[] = useSelector(
      (state: SkillState) => state.skills,
      shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()

  const saveSkill = React.useCallback(
      (skill: Skill) => dispatch(AddSkill(skill)),
      [dispatch]
  )

  return (
      <main>
          <h1>My Skills</h1>
          <AddSkill saveSkill={saveSkill} />
          {skills.map((skill: Skill) => (
              <Skill
                  key={skill.id}
                  skill={skill}
                  removeSkill={removeSkill}
              />
          ))}
      </main>
  )
}

export default App

export default App;
