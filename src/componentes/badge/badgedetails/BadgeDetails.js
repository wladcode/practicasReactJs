import React from "react";

import Badge from "../Badge";

import confLogo from "../../../images/platziconf-logo.svg";
import "./BagdeDetails.css";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "../../modal/DeleteBadgeModal";

function useIncreaseCount(maxCount) {
  const [count, setCount] = React.useState(0); // Se recupera los valores enviados, siempre inicializando a cero
  if (count > maxCount) {
    setCount(0);
  }

  return [count, setCount]; // Siempre se debe retornar el nuevo par de valores
}

function BadgeDetails(props) {
  //const [count, setCount] = React.useState(10); // Regresa un arreglo con dos valores
  const [count, setCount] = useIncreaseCount(5); //Use de Hook personalizado

  //const count = 3
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
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className='btn btn-primary mr-4'
                >
                  {" "}
                  Increse Count {count}
                </button>

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
