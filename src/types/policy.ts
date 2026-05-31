export type PolicyType = 'Single Trip' | 'Annual'
export type PolicyStatus = 'Active' | 'Expired'

export interface Destination {
  code: string
  name: string
}

export interface Policy {
  policyNumber: string
  policyStart: string
  policyEnd: string
  primaryTravellerFirstname: string
  primaryTravellerLastName: string
  primaryTravellerPhoneNumber: string
  status: PolicyStatus
  destinations: Destination[]
  alphaCode: string
  iSO3CountryOfResidence: string
  underwriterCode: string
  groupCode: string
  type: PolicyType
  excess: number
  maxTripDuration: number
  planName: string
}