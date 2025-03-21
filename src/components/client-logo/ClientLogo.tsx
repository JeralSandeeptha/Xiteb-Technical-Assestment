import { ClientLogoComponentProps } from "../../types/component.types";
import './ClientLogo.scss';

const ClientLogo = (props: ClientLogoComponentProps) => {

  return (
    <img src={props.image} alt={props.image} className="client-logo" />
  );

}

export default ClientLogo;
