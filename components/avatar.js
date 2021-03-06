
// learn more about personas: https://docs.personas.space/

import { get } from '@personas/client'

export default function Avatar ({ address }) {
  const placeholderAvatar = get.urls().avatar.small
  const imgSrc = get.urls(address).avatar.small

  const onError = e => {
    e.target.onerror = null
    e.target.src = placeholderAvatar
  }

  return (
    <>
      <img src={imgSrc} onError={onError} className='user-avatar-image' />

      <style jsx>{`
        .user-avatar-image {
          width: 50px;
          cursor: pointer;
          border-radius: 50%;
          border: solid 2px #00ffcc;
        }
      `}</style>
    </>
  )
}
