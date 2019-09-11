import * as React from 'react'

import IpcService from '../services/Ipc.service'

import StoresContext from '../stores/storesContext'

const AddSongComponent = () => {
  const { PlaylistStore } = React.useContext(StoresContext)
  const { addSong } = PlaylistStore

  const handleSongPath = (songData: { name: string; path: string }) => {
    addSong(songData)
  }

  return (
    <div className='add-song'>
      <input id='fileChooser' type='file' onChange={(e) => handleSongPath(e.target.files[0])} />
      <label htmlFor='fileChooser'>Add Song</label>
    </div>
  )
}

export default AddSongComponent
