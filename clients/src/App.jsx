import { NavBar, Service, Welcome, Loader, Footer } from './components/Index'


function App() {
  return (
    <>
  <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <NavBar />
        <Service />
      </div>
    <div>
      <Welcome />
      <Loader />
      <Footer />
    </div>
  </div>
    </>
  )
}

export default App
