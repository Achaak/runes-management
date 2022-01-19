export interface GetInnerShadow {
  dx: number
  dy: number
  opacity: number
  deviation: number
}
export interface CustomProps extends GetInnerShadow {
  id: string
}

export const getInnerShadow = ({
  dx,
  dy,
  opacity,
  deviation,
  id,
}: CustomProps): React.ReactNode => {
  return (
    <defs>
      <filter id={id}>
        <feOffset dx={dx} dy={dy} />

        <feGaussianBlur stdDeviation={deviation} result="offset-blur" />

        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />

        <feFlood floodColor="black" floodOpacity={opacity} result="color" />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />

        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
    </defs>
  )
}
