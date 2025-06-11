import Dashboard from "../pages/Dashboard"

export const Route = createFileRoute({
  component: Index,
})

function Index() {
  return <Dashboard />
}
