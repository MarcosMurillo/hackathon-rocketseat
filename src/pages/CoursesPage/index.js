import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
// import { toJS } from 'mobx'

import TechnologyComponent from '../../components/TechnologyComponent'

export default inject("rootStore")(
  observer(function ProfilePage({ rootStore }) {
    useEffect(() => {
      rootStore.courseStore.loadAll()
    }, [rootStore.courseStore]);

    // console.log(rootStore.courseStore.all && toJS(rootStore.courseStore.all[0].relatedTechnologies))

    return (
      <>
        { rootStore.courseStore.all ? 
          rootStore.courseStore.all.map(course => (
            <div className="card m-3" key={course.id}>
              <div className="card-body">
                <h5 className="card-title mr-3">{course.title}</h5>
                
                <p className="card-text">{course.description}</p>
                <a className="btn btn-success" href={course.url}>Acessar</a>
                <hr />
                <div className="d-flex flex-row">
                  {course.relatedTechnologies.map(technology => <TechnologyComponent key={technology.id} technology={technology} />)}
                </div>
              </div>
            </div>
          ))
          : <></>
        }
      </>
    );
  })
);
