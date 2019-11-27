import React, { useEffect } from "react";
import { inject, observer } from 'mobx-react'

export default inject('rootStore')(observer(function ProfilePage({ rootStore }) {

  useEffect(() => {
    rootStore.userStore.loadOne(0)
  }, [rootStore.userStore])

  return (
    <div className="row">
    <div className="col-6">{rootStore.userStore.one ? rootStore.userStore.one.fullName : 'kk'}</div>
      <div className="col-6">Coluna 2</div>
    </div>
  )
}))
