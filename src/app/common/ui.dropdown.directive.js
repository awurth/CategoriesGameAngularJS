
export default function UIDropdownDirective () {
  return {
    restrict: 'A',
    link: (scope, element) => {
      if (typeof element.dropdown !== 'undefined') {
        element.dropdown()
      }
    }
  }
}
