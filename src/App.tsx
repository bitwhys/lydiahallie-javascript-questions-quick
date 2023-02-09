import { useState } from 'react'
import ChoiceRadioButton from './components/ChoiceRadioButton'

function App() {
  return (
    <div className="flex flex-col space-y-16">
      <div className="bg-neutral-1 py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support center</h2>
          <p className="text-neutral-11 mt-6 text-lg leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
      <div className="mx-w-md bg-neutralDark-2 text-neutralDark-12 mx-auto shadow-xl sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6">Delete your account</h3>
          <div className="text-neutralDark-11 mt-2 max-w-xl text-sm">
            <p>Once you delete your account, you will lose all data associated with it.</p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="border-purpleDark-7 bg-purpleDark-3 text-purpleDark-10 hover:bg-purpleDark-4 focus:ring-negative-8 inline-flex items-center justify-center rounded-md border-2    px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[448px]">
        <ChoiceRadioButton
          option="a"
          text="ReferenceError & Lydia"
          correct={undefined}
          status="inactive"
          selected={false}
        />
      </div>
    </div>
  )
}

export default App
