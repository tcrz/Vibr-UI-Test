import { FC } from "react"

type SVGProps = {
  width?: string
  height?: string
  // classes?: string
}

export const ArrowRight = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M11.1666 5.18288L1.16663 5.18288" stroke="#004741" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.13342 9.19914L11.1668 5.18314L7.13342 1.16647" stroke="#004741" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}

export const ArrowLeft = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M0.833374 5.18288L10.8334 5.18288" stroke="#004741" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.86658 9.19914L0.833243 5.18314L4.86658 1.16647" stroke="#004741" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}

export const DocumentSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path d="M11.0969 12.5195H5.0802" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.0969 9.03076H5.0802" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.37603 5.55009H5.0802" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2572 1.2915C11.2572 1.2915 4.85965 1.29484 4.84965 1.29484C2.54965 1.309 1.12549 2.82234 1.12549 5.13067V12.794C1.12549 15.114 2.56049 16.6332 4.88049 16.6332C4.88049 16.6332 11.2772 16.6307 11.288 16.6307C13.588 16.6165 15.013 15.1023 15.013 12.794V5.13067C15.013 2.81067 13.5772 1.2915 11.2572 1.2915Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export const SearchSVG = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
        <circle cx="8.80553" cy="8.8055" r="7.49047" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.0153 14.4043L16.9519 17.3333" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}

export const HomeSVG:FC<SVGProps> = ({width, height}) => {
  return (
    <svg width={width ?? "20"} height={height ?? "21"} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/linear/home">
      <g id="home">
      <path id="Vector" d="M10.6619 15V12.5" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="Vector_2" d="M9.05359 2.35001L3.27859 6.97501C2.62859 7.49167 2.21192 8.58334 2.35359 9.40001L3.46192 16.0333C3.66192 17.2167 4.79526 18.175 5.99526 18.175H15.3286C16.5203 18.175 17.6619 17.2083 17.8619 16.0333L18.9703 9.40001C19.1036 8.58334 18.6869 7.49167 18.0453 6.97501L12.2703 2.35834C11.3786 1.64167 9.93692 1.64167 9.05359 2.35001Z" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </g>
    </svg>
  )
}

export const ArrowDown:FC<SVGProps> = ({width, height}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ?? "16"} height={height ?? "16"} viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke="#00100B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export const BookingsSVG:FC<SVGProps> = ({width, height}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ?? "21"} height={height ?? "20"} viewBox="0 0 21 20" fill="none">
  <path d="M7.32849 1.66666V4.16666" stroke="#808885" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.9952 1.66666V4.16666" stroke="#808885" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.57849 7.57501H17.7452" stroke="#808885" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.1619 7.08332V14.1667C18.1619 16.6667 16.9119 18.3333 13.9952 18.3333H7.32853C4.41187 18.3333 3.16187 16.6667 3.16187 14.1667V7.08332C3.16187 4.58332 4.41187 2.91666 7.32853 2.91666H13.9952C16.9119 2.91666 18.1619 4.58332 18.1619 7.08332Z" stroke="#808885" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.7408 11.4167H13.7483" stroke="#808885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.7408 13.9167H13.7483" stroke="#808885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.6581 11.4167H10.6655" stroke="#808885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.6581 13.9167H10.6655" stroke="#808885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.57383 11.4167H7.58132" stroke="#808885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.57383 13.9167H7.58132" stroke="#808885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export const CustomersSVG:FC<SVGProps> = ({width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width ?? "16"} height={height ?? "16"} viewBox="0 0 19 16" fill="none">
        <path d="M14.5682 7.0806C15.7307 6.91726 16.6257 5.9206 16.6282 4.7131C16.6282 3.5231 15.7607 2.53643 14.6232 2.34976" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.1023 9.87527C17.2281 10.0436 18.014 10.4378 18.014 11.2503C18.014 11.8094 17.644 12.1728 17.0456 12.4011" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5674 10.2198C6.88906 10.2198 4.60156 10.6257 4.60156 12.2465C4.60156 13.8665 6.8749 14.284 9.5674 14.284C12.2457 14.284 14.5324 13.8823 14.5324 12.2607C14.5324 10.639 12.2599 10.2198 9.5674 10.2198Z" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.56741 7.9066C11.3249 7.9066 12.7499 6.48243 12.7499 4.7241C12.7499 2.9666 11.3249 1.5416 9.56741 1.5416C7.80991 1.5416 6.38491 2.9666 6.38491 4.7241C6.37824 6.47576 7.79241 7.90076 9.54408 7.9066H9.56741Z" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.56586 7.0806C3.40253 6.91726 2.50836 5.9206 2.50586 4.7131C2.50586 3.5231 3.37336 2.53643 4.51086 2.34976" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.03178 9.87527C1.90595 10.0436 1.12012 10.4378 1.12012 11.2503C1.12012 11.8094 1.49012 12.1728 2.08845 12.4011" stroke="#808885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}

export const ServicesSVG:FC<SVGProps> = ({width, height}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width ?? "21"} height={height ?? "20"} viewBox="0 0 21 20" fill="none">
        <path d="M14.8285 8.33332H16.4952C18.1618 8.33332 18.9952 7.49999 18.9952 5.83332V4.16666C18.9952 2.49999 18.1618 1.66666 16.4952 1.66666H14.8285C13.1618 1.66666 12.3285 2.49999 12.3285 4.16666V5.83332C12.3285 7.49999 13.1618 8.33332 14.8285 8.33332Z" stroke="#808885" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.82849 18.3333H6.49516C8.16182 18.3333 8.99516 17.5 8.99516 15.8333V14.1667C8.99516 12.5 8.16182 11.6667 6.49516 11.6667H4.82849C3.16182 11.6667 2.32849 12.5 2.32849 14.1667V15.8333C2.32849 17.5 3.16182 18.3333 4.82849 18.3333Z" stroke="#808885" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.66182 8.33332C7.50277 8.33332 8.99516 6.84094 8.99516 4.99999C8.99516 3.15904 7.50277 1.66666 5.66182 1.66666C3.82088 1.66666 2.32849 3.15904 2.32849 4.99999C2.32849 6.84094 3.82088 8.33332 5.66182 8.33332Z" stroke="#808885" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.6618 18.3333C17.5028 18.3333 18.9952 16.8409 18.9952 15C18.9952 13.159 17.5028 11.6667 15.6618 11.6667C13.8209 11.6667 12.3285 13.159 12.3285 15C12.3285 16.8409 13.8209 18.3333 15.6618 18.3333Z" stroke="#808885" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  )
}