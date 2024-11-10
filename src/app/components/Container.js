'use client'

import tw from 'twin.macro'


const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ $hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    $hasBackground && tw`bg-gradient-to-b from-red-300 to-red-100`,
  ],
}

export const Container = props => (
  <div css={styles.container({ $hasBackground: props.$hasBackground })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">{props.children}</div>
  </div>
)