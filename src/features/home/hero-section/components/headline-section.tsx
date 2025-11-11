import ButtonTry from "./button-try"

export default function HeadlineSection() {
  return (
    <section className="flex flex-col min-h-[80vh] items-center justify-center gap-20">
      <h1 className="text-[56px]">Create A Future Where You Can Feel</h1>
      <h3 className="text-[36px] text-center">At Ease</h3>
      <div className="flex flex-col justify-center items-center gap-5">
        <p>Try Our ChatBot Now</p>
        <ButtonTry />
      </div>
    </section>
  )
}