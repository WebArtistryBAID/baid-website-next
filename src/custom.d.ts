declare module '@data/*' {
  const value: any
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $clientType: 'mobile' | 'desktop',
    $t: (key: string) => string
  }
}
