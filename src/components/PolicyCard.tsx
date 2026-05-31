import type { Policy } from "../types/policy";
import { formatCurrency, formatDate } from "../utils/format";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
interface PolicyCardProps {
  policy: Policy;
}

export const PolicyCard = ({ policy }: PolicyCardProps) => {
  const destinationNames = policy.destinations.map((d) => d.name);

  const handleButtonClick = () => {
    alert("This is a demo. No action will be taken.");
  };

  return (
    <article className="policy-card bg-white rounded-xl p-5">
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_200px] gap-4">
        <div className="policy-card__grid">
          <div className="policy-card__top">
            <div className="md:flex gap-2 items-center mb-4">
              <p className="text-xl font-medium text-blue-600">
                Policy number:
              </p>
              <h2 className="text-xl">{policy.policyNumber}</h2>
            </div>
          </div>
          <div className="policy-card_info-list">
            <div className="policy-card__info">
              <p className="policy-card__info-label">Destination:</p>
              <p>{destinationNames}</p>
            </div>
            
            { policy.type !== "Single Trip" && <>
              <div className="policy-card__info">
                <p className="policy-card__info-label">Policy start date:</p>
                <p>{formatDate(policy.policyStart)}</p>
              </div>
                <div className="policy-card__info">
                  <p className="policy-card__info-label">Maximum trip duration:</p>
                  <p>{policy.maxTripDuration} days</p>
                </div>
              </>
            }

            { policy.type === "Single Trip" && 
              <div className="policy-card__info">
                <p className="policy-card__info-label">Travel date:</p>
                <p>{formatDate(policy.policyStart)} - {formatDate(policy.policyEnd)}</p>
              </div>
            }
            
            {/* Plan Type */}

            <div className="policy-card__info">
              <p className="policy-card__info-label">Plan:</p>
              <p>
                { policy.type !== "Single Trip" ? 'Annual Multi-Trip' : policy?.planName }
              </p>
            </div>

            <div className="policy-card__info">
              <p className="policy-card__info-label">Excess:</p>
              <p>{formatCurrency(policy.excess)}</p>
            </div>

          </div>
          <div className="flex gap-2 mt-4 policy-documents">
            <a className="text-xs" href="https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> View PDS
            </a>
            <a className="text-xs" href="https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Certificate of insurance
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleButtonClick}
          >
            Make a claim
          </button>
          <button type="button" className="btn" onClick={handleButtonClick}>
            Manage my policy
          </button>
        </div>
      </div>
    </article>
  );
};
