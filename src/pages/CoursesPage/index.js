import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { FaEdit, FaStar, FaPlus } from "react-icons/fa";

export default inject("rootStore")(
  observer(function ProfilePage({ rootStore }) {
    useEffect(() => {
      rootStore.courseStore.loadAll()
    }, [rootStore.courseStore]);


    return (
      <>
        { rootStore.courseStore.all ? 
          rootStore.courseStore.all.map(course => (
            <div className="card m-3">
              <div class="card-body">
                <h5 class="card-title">{course.title}</h5>
                <p class="card-text">{course.description}</p>
              </div>
            </div>
          ))
          : <></>
        }
      </>
    );
  })
);
