import React from "react";
import { StyledContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { goToHomePrincipal } from "../../../router/cordinator";

export default function Coment() {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <div>
        <input type="text" placeholder="Adicionar comentario" />
      </div>

      <button onClick={() => goToHomePrincipal(navigate)} className="button2">
        Responder
      </button>
      <hr />
    </StyledContainer>
  );
}
