import * as React from 'react';
import styled from 'styled-components';

import { Color } from '@styles/colors';

const Wrapper = styled.div`
  flex-shrink: 0;
`;

export interface LogoProps {
  width: number;
  height: number;
  fill: string;
}

class Logo extends React.Component<LogoProps> {
  static readonly defaultProps = {
    width: 120,
    height: 25,
    fill: Color.Blue
  };

  render() {
    const { width, height, fill } = this.props;

    return (
      <Wrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 405 82"
          aria-labelledby="title"
        >
          <title id="title">Blurbyte</title>
          <path
            fill={fill}
            d="M300.1533 0h-3.9873c-4.456 0-7.2715 2.1162-8.211 6.1157l-4.9237 23.558c-.705 3.528-2.1123 7.2906-4.458 7.2906-1.876 0-3.5195-1.1748-4.6914-7.0562L269.1904 7.527C268.0175 2.5868 265.672 0 261.6835 0h-4.2226c-3.2833 0-7.0372 1.1758-4.2228 10.583.703 2.587 15.4834 47.0762 15.4834 51.0742 0 3.293-2.3467 6.3496-6.8047 7.291-4.2218.9414-6.8028 2.8223-6.8028 6.585 0 4 2.581 6.3506 6.333 6.3506h5.8662c6.8008 0 14.3086-2.1162 19-16.6973l18.5313-57.191c.2354-.9413.4697-2.0536.4697-3.699 0-2.353-2.3466-4.2965-5.161-4.2965M75.9936 0h-3.753c-4.221 0-7.0365 3.293-7.0365 7.527v65.772c0 6.115 2.579 8.701 9.6167 8.701 5.8656 0 8.6796-2.5858 8.6796-7.5263V8.7007C83.5006 2.8213 80.92 0 75.9936 0M201.459.041h-3.7534c-3.9873 0-5.8638 3.0566-5.8638 7.2905v63.733c0 7.5253 1.8765 9.408 7.9766 9.408 5.3936 0 4.9248-1.6464 10.5557-1.6464s6.0987 3.0577 14.7784 3.0577c14.544 0 25.8027-10.8193 25.8027-32.9258 0-19.05-10.5556-29.398-25.0985-29.398-6.5684 0-9.8516 2.587-13.6055 2.587-3.286 0-4.9268-3.7628-4.9268-7.0553V7.3315c0-4.94-2.581-7.2905-5.8652-7.2905M9.6016.041H5.849C1.862.041-.0146 3.0976-.0146 7.3315v63.733c0 7.5253 1.8765 9.408 7.9746 9.408 5.3954 0 4.9257-1.6464 10.556-1.6464 5.6295 0 6.0982 3.0577 14.7765 3.0577 14.546 0 25.8047-10.8193 25.8047-32.9258 0-19.05-10.5547-29.398-25.0996-29.398-6.5688 0-9.852 2.587-13.6055 2.587-3.284 0-4.9257-3.7628-4.9257-7.0553V7.3315c0-4.94-2.5806-7.2905-5.8647-7.2905M133.17 1.921h-3.519c-3.048 0-5.3937 2.1186-5.3937 5.8812 0 3.057 1.6406 5.644 7.27 5.644 3.9883 0 6.8032-1.412 6.8032-5.8804 0-3.997-2.815-5.645-5.1606-5.645m-24.8643 0h-3.2842c-3.7534 0-5.6284 2.8238-5.6284 5.8814 0 3.057 1.6407 5.644 7.27 5.644 3.988 0 6.8033-1.412 6.8033-5.8804 0-3.5262-2.3457-5.645-5.1606-5.645M376.161 17.561c-15.247 0-29.792 9.8765-29.792 33.8647C346.369 71.416 359.2706 82 376.3946 82c17.5947 0 26.038-10.584 26.038-14.3457 0-2.8232-4.2216-6.1143-7.9755-6.1143-6.0977 0-7.7412 8.2305-17.8262 8.2305-6.1006 0-12.1992-5.6445-12.1992-10.8184 0-3.997 2.8145-6.8192 8.21-6.8192h24.3965c5.631 0 7.9767-1.4102 7.9767-6.8203 0-4.704-3.2852-27.7515-28.8536-27.7515m-214.625.2354c-7.0355 0-8.9125 3.293-8.9125 9.1724v43.9775c0 6.1162 2.3457 9.4072 6.8032 9.4072h4.6914c4.9254 0 7.271-3.0566 7.271-8.9375V47.1943c0-5.4102 3.0504-9.6426 9.1495-11.524 6.3335-1.8827 7.7407-4.2323 7.7407-9.8773 0-4.4692-1.877-6.8208-5.8647-6.8208-3.5186 0-4.4565 1.411-7.975 1.411-2.816 0-5.6294-2.5868-12.9034-2.5868m-23.4388 2.1152h-2.5815c-4.9253 0-7.271 2.1182-7.271 6.5864v24.6953c0 11.288-3.754 16.9316-11.024 16.9316-7.038 0-9.3837-4.9386-9.3837-15.052V26.498c0-4.4683-3.0498-6.5864-6.5688-6.5864h-3.753c-3.2846 0-6.099 2.3535-6.099 6.5864v38.0996C91.416 75.414 97.5152 82 109.0098 82c9.3838 0 8.914-3.0566 15.9507-3.0566 4.6904 0 4.6904 1.4102 11.2593 1.4102 4.9263 0 8.4443-2.1152 8.4443-6.584V27.203c0-4.938-2.1108-7.2914-6.5668-7.2914m-108.791 50.683c-7.9746 0-13.6045-6.8202-13.6045-20.46 0-13.642 6.8032-19.5214 14.0732-19.5214 9.3832 0 13.6063 9.172 13.6063 21.166 0 12.7003-6.5688 18.8155-14.075 18.8155m191.8587 0c-7.9756 0-13.6074-6.8203-13.6074-20.46 0-13.642 6.8047-19.5215 14.0752-19.5215 9.3838 0 13.6055 9.172 13.6055 21.166 0 12.7003-6.5664 18.8155-14.0733 18.8155m153.8233-27.871c-6.334 0-9.6182-1.879-9.6182-5.4068 0-4.2345 6.0997-7.526 10.791-7.526 5.629 0 10.5548 4.233 10.5548 7.995 0 3.294-3.9883 4.9376-11.7275 4.9376M324.9913 0c-8.4474 0-9.1505 5.8813-9.1505 8.4683 0 2.5874 0 4.273-1.173 6.86-.9384 2.351-7.036 4.7025-7.036 8.701 0 3.9962 4.2217 5.6427 6.0977 7.9957 1.877 2.3506 2.581 5.8784 2.3457 10.5835v21.9893C316.0752 76.1222 322.6445 82 335.547 82c6.333 0 9.3808-2.5858 9.3808-7.5263 0-7.0527-7.7393-7.0527-9.6152-11.0518-.9395-1.882-1.4082-3.0587-1.4082-7.0567v-14.464c0-3.998-.2334-5.4086.9385-7.9945 2.1112-4.7036 9.3817-3.9985 9.3817-9.643 0-5.644-6.8027-5.644-8.6777-8.467-1.1738-1.8808-1.6426-4.741-1.6426-7.095 0-3.292-.7032-8.7018-8.9132-8.7018"
          />
        </svg>
      </Wrapper>
    );
  }
}

export default Logo;
