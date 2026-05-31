import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { policies as mockPolicies } from '../data/policies'
import type { Policy } from '../types/policy'

interface PoliciesContextValue {
  policies: Policy[]
  loading: boolean
  currentPage: number
  totalPages: number
  paginatedPolicies: Policy[]
  setCurrentPage: (page: number) => void
}

const PoliciesContext = createContext<PoliciesContextValue | undefined>(undefined)

const PAGE_SIZE = 3

// Mock API
const fetchPolicies = async (): Promise<Policy[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockPolicies), 500)
  })

export const PoliciesProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [policies, setPolicies] = useState<Policy[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const response = await fetchPolicies()

      const filtered = response
        .filter((policy) => policy.status === 'Active')
        .sort(
          (a, b) =>
            new Date(a.policyStart).getTime() -
            new Date(b.policyStart).getTime(),
        )

      setPolicies(filtered)
      setLoading(false)
    }

    void load()
  }, [])

  const totalPages = Math.ceil(policies.length / PAGE_SIZE) || 1

  const paginatedPolicies = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return policies.slice(start, start + PAGE_SIZE)
  }, [currentPage, policies])

  const value = useMemo(
    () => ({
      policies,
      loading,
      currentPage,
      totalPages,
      paginatedPolicies,
      setCurrentPage,
    }),
    [policies, loading, currentPage, totalPages, paginatedPolicies],
  )

  return (
    <PoliciesContext.Provider value={value}>
      {children}
    </PoliciesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePolicies = () => {
  const ctx = useContext(PoliciesContext)
  if (!ctx) throw new Error('usePolicies must be used within PoliciesProvider')
  return ctx
}