import React from 'react';
import { shallow } from 'enzyme';

import PostContainer from '../PostContainer';
import postData from '../application-data';

describe('Post Container', () => {
    it('should render one image tag and one link tag', () => {
        const component = shallow(<PostContainer key={'2'} postData={postData[0]} />);
        expect(component.find('a').length).toBe(1);
        expect(component.find('img').length).toBe(1);
    });
});