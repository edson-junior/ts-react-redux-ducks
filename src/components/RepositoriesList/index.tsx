import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from '../../store';
import { loadRequest } from '../../store/ducks/repositories/actions';
import { Repository } from '../../store/ducks/repositories/types';


const RepositoriesList = () => {
  const repositories: Repository[] = useSelector((state: ApplicationState) => state.repositories.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadRequest())
  }, []); // eslint-disable-line

  return (
    <ul>
      {repositories.map((repo, i) => <li key={i}>{repo.name}</li>)}
    </ul>
  )
}

export default RepositoriesList