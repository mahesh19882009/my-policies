import { Pagination } from './components/Pagination'
import { PolicyCard } from './components/PolicyCard'
import { usePolicies } from './context/PoliciesContext'

const App = () => {
  const {
    loading,
    paginatedPolicies,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePolicies()

  return (
    <main className="page-cntr">
      
      {loading ? (
        <section className="policy-list">
          Loading...
        </section>
      ) : (
        <>
          <section className="policy-list">
            {paginatedPolicies.map((policy) => (
              <PolicyCard key={policy.policyNumber} policy={policy} />
            ))}
          </section>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </main>
  )
}

export default App