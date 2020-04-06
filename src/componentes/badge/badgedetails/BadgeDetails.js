import React from "react";

import Badge from "../Badge";

import confLogo from "../../../images/platziconf-logo.svg";
import "./BagdeDetails.css";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "../../modal/DeleteBadgeModal";

function BadgeDetails(props) {
  console.log(props);

  const badge = props.badge;

  return (
    <div>
      <div className='BadgeDetails_hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLogo} alt='Logo de la conferencia' />
            </div>
            <div className='col-6 BadgeDetails_hero-attendant-name'>
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge
              firstName={badge.firstName || "FIRST_NAME"}
              lastName={badge.lastName || "LAST_NAME"}
              jobTitle={badge.jobTitle || "JOB_TITLE"}
              email={badge.email || "EMAIL"}
            />
          </div>
          <div className='col'>
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className='btn btn-primary mb-4'
                  to={`/badges/${badge.id}/edit`}
                >
                  Editar
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className='btn btn-danger'>
                  Eliminar
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                >
                  Lorem Upsum
                </DeleteBadgeModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
