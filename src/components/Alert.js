import React from 'react'

function Alert(props) {
    return (
        <>
            <div className={`modal fade`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog`}>
                    <div className={`modal-content bg-${props.mode}`}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.message.title }</h5>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className={`modal-body `}>
                            {props.message.body}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alert