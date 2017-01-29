function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

let components: any[] = requireAll(require.context('../docs/components', true, /_map.ts/))
components.forEach((m)=>{
  m.kind = 'component'
})

let decorators: any[] = requireAll(require.context('../docs/decorators', true, /_map.ts/))
decorators.forEach((m)=>{
  m.kind = 'decorator'
})

let filters: any[] = requireAll(require.context('../docs/filters', true, /_map.ts/))
filters.forEach((m)=>{
  m.kind = 'filter'
})

let moduless: any[] = requireAll(require.context('../docs/modules', true, /_map.ts/))
moduless.forEach((m)=>{
  m.kind = 'module'
})


export const modules = [].concat(components, decorators, filters, moduless)