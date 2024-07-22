import { Linkedin } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 120 120"
      {...props}
    >
      <path
        d="M0 0 C15.18 0 30.36 0 46 0 C46 15.58308811 46 15.58308811 42.18896484 19.7019043 C41.65223145 20.21277588 41.11549805 20.72364746 40.5625 21.25 C40.02061035 21.82081299 39.4787207 22.39162598 38.92041016 22.97973633 C37.82569517 24.13004105 36.71741097 25.26760195 35.59521484 26.39111328 C33.26207924 28.74424515 31.07759422 31.21182721 28.875 33.6875 C27.81925781 34.83798828 27.81925781 34.83798828 26.7421875 36.01171875 C24.84837219 38.08536952 24.84837219 38.08536952 23 41 C30.59 41.33 38.18 41.66 46 42 C46 46.62 46 51.24 46 56 C30.16 56 14.32 56 -2 56 C-2 41.39856373 -2 41.39856373 1.6875 37.625 C2.90179688 36.31402344 2.90179688 36.31402344 4.140625 34.9765625 C4.59244141 34.5115332 5.04425781 34.04650391 5.50976562 33.56738281 C7.82348804 31.13388053 9.99538422 28.58170867 12.18481445 26.03662109 C13.33634174 24.69854607 14.49357955 23.3653603 15.65698242 22.03759766 C16.19170166 21.42706543 16.7264209 20.8165332 17.27734375 20.1875 C17.75421631 19.64480469 18.23108887 19.10210938 18.72241211 18.54296875 C20.19804601 16.81494601 20.19804601 16.81494601 22 14 C14.74 14 7.48 14 0 14 C0 9.38 0 4.76 0 0 Z "
        fill="currentColor"
        transform="translate(8,0)"
      />
      <path
        d="M0 0 C11.22 0 22.44 0 34 0 C34 12 34 12 30.71875 16.453125 C29.34221205 17.75100364 27.93480596 19.01684244 26.5 20.25 C25.78457031 20.91128906 25.06914063 21.57257812 24.33203125 22.25390625 C22.58092154 23.86492719 20.7938886 25.43675422 19 27 C23.95 27.33 28.9 27.66 34 28 C34 31.96 34 35.92 34 40 C22.12 40 10.24 40 -2 40 C-2 28 -2 28 1.28125 23.546875 C2.65778795 22.24899636 4.06519404 20.98315756 5.5 19.75 C6.57314453 18.75806641 6.57314453 18.75806641 7.66796875 17.74609375 C9.41907846 16.13507281 11.2061114 14.56324578 13 13 C8.71 12.67 4.42 12.34 0 12 C0 8.04 0 4.08 0 0 Z "
        fill="currentColor"
        transform="translate(60,30)"
      />
      <path
        d="M0 0 C10.56 0 21.12 0 32 0 C32 11.49306431 32 11.49306431 26.6875 17.375 C26.18798828 17.96410156 25.68847656 18.55320312 25.17382812 19.16015625 C24.24397387 20.25627584 23.30406291 21.34401594 22.3503418 22.41943359 C20.81826519 24.21271943 19.41517766 26.11309645 18 28 C22.62 28 27.24 28 32 28 C32 31.3 32 34.6 32 38 C21.44 38 10.88 38 0 38 C0 26.50693569 0 26.50693569 5.3125 20.625 C5.81201172 20.03589844 6.31152344 19.44679688 6.82617188 18.83984375 C7.75602613 17.74372416 8.69593709 16.65598406 9.6496582 15.58056641 C11.18173481 13.78728057 12.58482234 11.88690355 14 10 C9.38 10 4.76 10 0 10 C0 6.7 0 3.4 0 0 Z "
        fill="currentColor"
        transform="translate(22,62)"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  linkedIn: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      {...props}
    >
      <path
        fill="currentColor"
        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
      ></path>
    </svg>
  ),
  discord: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30"
      {...props}
    >
      <path
        fill="currentColor"
        d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z"
      ></path>
    </svg>
  ),
  portfolio: (props: IconProps) => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="90"
      viewBox="0 0 80 80"
      {...props}
    >
      <path
        d="M0 0 C0.71884369 -0.00350464 1.43768738 -0.00700928 2.17831421 -0.01062012 C4.56037991 -0.01944059 6.9421499 -0.0135873 9.32421875 -0.00683594 C10.9756679 -0.0081825 12.62711666 -0.01012296 14.27856445 -0.01263428 C17.74206308 -0.01558596 21.20545865 -0.01128651 24.66894531 -0.00195312 C29.11467186 0.00944148 33.56015695 0.00288224 38.00587463 -0.00909805 C41.41672596 -0.01631548 44.82751977 -0.01402928 48.2383728 -0.00884247 C49.87787911 -0.00750564 51.5173906 -0.00915483 53.15689087 -0.01380157 C55.44588101 -0.01886494 57.73447683 -0.01115956 60.0234375 0 C61.97963013 0.00238678 61.97963013 0.00238678 63.9753418 0.00482178 C67.01171875 0.25878906 67.01171875 0.25878906 69.01171875 2.25878906 C69.25222778 4.9289856 69.25222778 4.9289856 69.23876953 8.36083984 C69.23852783 9.65997314 69.23828613 10.95910645 69.23803711 12.29760742 C69.22796509 13.68310741 69.21763188 15.06860552 69.20703125 16.45410156 C69.20501709 17.7102124 69.20300293 18.96632324 69.20092773 20.26049805 C69.19043634 24.96829868 69.16251397 29.67604741 69.13671875 34.38378906 C69.09546875 44.90253906 69.05421875 55.42128906 69.01171875 66.25878906 C43.27171875 66.25878906 17.53171875 66.25878906 -8.98828125 66.25878906 C-9.02953125 55.74003906 -9.07078125 45.22128906 -9.11328125 34.38378906 C-9.13148926 31.06074707 -9.14969727 27.73770508 -9.16845703 24.31396484 C-9.17429563 21.69401206 -9.17939268 19.07405748 -9.18359375 16.45410156 C-9.1888205 15.77096893 -9.19404724 15.0878363 -9.19943237 14.38400269 C-9.21402734 12.37632779 -9.2149585 10.36856775 -9.21533203 8.36083984 C-9.21977325 7.22832794 -9.22421448 6.09581604 -9.22879028 4.9289856 C-8.70860725 -0.84622752 -4.84202114 0.00590782 0 0 Z M-2.98828125 18.25878906 C-2.98828125 32.11878906 -2.98828125 45.97878906 -2.98828125 60.25878906 C18.79171875 60.25878906 40.57171875 60.25878906 63.01171875 60.25878906 C63.01171875 46.39878906 63.01171875 32.53878906 63.01171875 18.25878906 C41.23171875 18.25878906 19.45171875 18.25878906 -2.98828125 18.25878906 Z "
        fill="currentColor"
        transform="translate(14.98828125,11.7412109375)"
      />
      <path
        d="M0 0 C0.29677111 6.52896434 -0.75995004 12.08072165 -2.4375 18.375 C-2.66759766 19.27605469 -2.89769531 20.17710938 -3.13476562 21.10546875 C-4.82979911 27.65959821 -4.82979911 27.65959821 -6 30 C-7.98 30 -9.96 30 -12 30 C-12.29677111 23.47103566 -11.24004996 17.91927835 -9.5625 11.625 C-9.33240234 10.72394531 -9.10230469 9.82289062 -8.86523438 8.89453125 C-7.17020089 2.34040179 -7.17020089 2.34040179 -6 0 C-3 -1 -3 -1 0 0 Z "
        fill="currentColor"
        transform="translate(51,36)"
      />
      <path
        d="M0 0 C2.75 -0.32421875 2.75 -0.32421875 6 0 C8.1875 2.23046875 8.1875 2.23046875 10 5.1875 C10.61875 6.15042969 11.2375 7.11335938 11.875 8.10546875 C13 11 13 11 12.3359375 13.59765625 C11.89507812 14.39042969 11.45421875 15.18320312 11 16 C10.43152344 17.09054688 10.43152344 17.09054688 9.8515625 18.203125 C9.44679688 18.87859375 9.04203125 19.5540625 8.625 20.25 C8.22539063 20.93578125 7.82578125 21.6215625 7.4140625 22.328125 C5.68988167 24.36665924 4.62800015 24.72777688 2 25 C0 24 0 24 -0.875 22.3125 C-1 20 -1 20 1 17.0625 C3.24313563 14.26045766 3.24313563 14.26045766 2.9375 11.5 C1.99917793 8.8451473 1.99917793 8.8451473 0.375 5.875 C-1 3 -1 3 0 0 Z "
        fill="currentColor"
        transform="translate(57,39)"
      />
      <path
        d="M0 0 C0.886875 0.165 1.77375 0.33 2.6875 0.5 C3.4375 2.125 3.4375 2.125 3.6875 4.5 C3.0275 5.469375 2.3675 6.43875 1.6875 7.4375 C-0.55563563 10.23954234 -0.55563563 10.23954234 -0.25 13 C0.68832207 15.6548527 0.68832207 15.6548527 2.3125 18.625 C3.6875 21.5 3.6875 21.5 2.6875 24.5 C-0.3125 25.5 -0.3125 25.5 -3.3125 24.5 C-5.20703125 22.171875 -5.20703125 22.171875 -7.125 19.25 C-7.77082031 18.29609375 -8.41664062 17.3421875 -9.08203125 16.359375 C-10.3125 13.5 -10.3125 13.5 -9.65234375 10.91015625 C-9.21019531 10.11480469 -8.76804687 9.31945312 -8.3125 8.5 C-7.95671875 7.76136719 -7.6009375 7.02273437 -7.234375 6.26171875 C-4.04131948 0.61001049 -4.04131948 0.61001049 0 0 Z "
        fill="currentColor"
        transform="translate(30.3125,38.5)"
      />
    </svg>
  ),
};
