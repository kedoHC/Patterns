

import React from 'react'

import styles from './index.css'

const Clap = () =>{

    console.log( styles)

    return (
        <button className="clap">
            <ClapIcon />
            <ClapCount />
            <ClapTotal />
        </button>
    )
}


// ---------------------------
// SUBCOMPONENTS
// ---------------------------

const ClapIcon = () => {
    return <span>
        <svg height="32" viewBox="0 0 512.02 512.02" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M.046 186.268c2.362 40.153 2.164 73.45 1.989 102.828C1.572 366.984.847 417.73 55.618 472.501c52.635 52.634 138.281 52.638 190.919 0l.002-.003 148.49-148.49c17.586-17.585 17.589-46.052 0-63.64a44.81 44.81 0 00-12.424-8.789l24.61-24.61c17.545-17.545 17.545-46.093 0-63.64a44.754 44.754 0 00-13.966-9.474c9.782-17.038 7.56-39.359-7.248-54.166a44.76 44.76 0 00-13.161-9.124c11.113-17.235 9.352-40.728-6.052-56.131-14.652-14.652-36.972-17.057-54.141-7.253a44.942 44.942 0 00-9.499-13.96c-17.544-17.545-46.094-17.546-63.62-.019-.912.908-79.383 79.095-129.632 129.272l-7.715-54.548c-.608-24.27-20.441-43.842-44.984-43.842-24.57 0-44.397 19.602-44.986 43.899-.011.415-.003.831.021 1.245 1.201 20.398 1.852 40.931 2.031 64.055C4.141 162.766-.519 176.261.046 186.268zm373.77 116.528L225.324 451.288c-40.938 40.939-107.553 40.94-148.493 0-45.489-45.489-45.257-84.431-44.796-162.014.176-29.656.376-63.243-1.998-104.036.751-12.837 16.455-18.847 25.581-9.721 5.089 5.089 3.14 7.279 4.543 12.718.003.027.007.054.012.08l12.04 85.142c1.73 12.22 16.722 17.247 25.46 8.505 25.89-25.894-2.714 2.694 149.295-149.261 5.875-5.439 15.071-5.32 20.782.39 5.863 5.863 5.863 15.35 0 21.213l-.005.006-63.635 63.634c-5.858 5.858-5.858 15.355 0 21.213 5.856 5.858 15.354 5.858 21.213 0l84.854-84.853c5.85-5.848 15.365-5.848 21.212.001 5.863 5.863 5.863 15.35 0 21.213l-84.853 84.853c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l63.64-63.64c5.85-5.849 15.367-5.848 21.213 0 5.849 5.849 5.85 15.365.001 21.213l-63.64 63.64c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l42.502-42.502c5.856-5.773 15.314-5.747 21.138.075 5.863 5.862 5.863 15.35 0 21.213zm-9.027-181.892c5.863 5.863 5.863 15.35 0 21.213l-3.385 3.385a45.036 45.036 0 00-8.802-12.412 45.039 45.039 0 00-12.412-8.801l3.393-3.392c5.849-5.841 15.361-5.839 21.206.007zm21.214 84.853l-3.405 3.405a44.78 44.78 0 00-8.782-12.432 44.78 44.78 0 00-12.431-8.782l3.404-3.404c5.85-5.849 15.367-5.848 21.213-.001 5.848 5.849 5.849 15.365.001 21.214zM345.576 55.649c5.845 5.845 5.868 15.305.037 21.176l-47.849 47.465a45.056 45.056 0 00-8.802-12.413 44.805 44.805 0 00-12.315-8.725l47.714-47.504c5.853-5.849 15.367-5.847 21.215.001zM109.859 184.923c44.802-44.809 149.789-149.417 150.863-150.487 5.851-5.849 15.365-5.848 21.214 0 5.596 5.596 5.803 14.393.882 20.241-140.276 139.994 65.966-66.279-185.109 184.82l-7.53-53.243a14.986 14.986 0 0019.68-1.331zM42.223 88.198c.748-12.834 16.456-18.844 25.581-9.72 5.089 5.09 3.139 7.278 4.542 12.717l9.836 69.552c-8.819-12.86-23.16-19.871-38.055-19.581-.286-18.664-.908-35.858-1.904-52.968zM497.02 92.042h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.715-15-15-15zM446.627 55.648l30-30c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-30 30c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0z"/></svg>
    </span>
}

const ClapCount = ({ count }) => {
    return <span>+ { count }</span>
}

const ClapTotal = ({ countTotal }) => {
    return <span>{ countTotal }</span>
}



export default Clap