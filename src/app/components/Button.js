import tw, { styled, css, theme } from 'twin.macro'

const Button = styled.button(({ $variant, $isSmall }) => [
  // The common button styles added with the tw import
  tw`px-8 py-2 rounded transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  $variant === 'primary' && tw`bg-black text-white border-black bg-blue-700`,

  // Combine regular css with tailwind classes within backticks
  $variant === 'secondary' && [
    css`
      box-shadow: 0 0.1em  rgba(255, 0, 0, 1);
    `,
    tw`border-2 border-yellow-600`,
  ],

  // Conditional props can be used
  $isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.black`};
  `,
])

export default Button