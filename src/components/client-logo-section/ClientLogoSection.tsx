import { clientdata } from "../../data/client-logo-section.data";
import ClientLogo from "../client-logo/ClientLogo";
import './ClientLogoSection.scss';

const ClientLogoSection = () => {

    return (
        <div className="client-logo-section">
            <div className="client-logo-section-inner">

                {
                    clientdata.map((logo) => {
                        return(
                            <ClientLogo key={logo.id} image={logo.image}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ClientLogoSection;
