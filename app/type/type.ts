export type TExperience = {
    id: number;
    period: string;
    title: string;
    organization: string;
    category: 'Award' | 'Certificate' | 'Education' | 'Activity';
    description: string;
    download?: string;
    link?: string;
};
export type TProject = {
    title: string;
    category: string;
    period: string;
    description: string;
    techStack: string[];
    youtube?: string;
    images: string[];
    results: string[];
    links: {
        demo?: string;
        github?: string;
    };
    detailContent: string;
    troubleshooting?: {
        url: string;
    };
};

export type TProfile = {
    name: string;
    role: string;
    slogan: string;
    email: string;
    github: string;
    linkedIn: string;
    blog: string;
};

export type TSkills = {
    Languages: string[];
    Frameworks: string[];
    Styling: string[];
    StateManagement: string[];
    Tools: string[];
};

export type TEducation = {
    period: string;
    degree: {
        name: string;
        info?: string;
    }[];
    graduate: boolean;
    graduateDate: string;
    gpa: number;
};

export type TBlogPost = {
    slug: string;
    title: string;
    desc: string;
    date: string;
    tags?: string[];
};

export interface IRawFrontMatter {
    date?: string | Date;
    title?: string;
    desc?: string;
    tags?: string[] | string;
}

export interface IPostMeta {
    slug: string;
    date: string;
    title: string;
    desc: string;
    tags: string[];
}

export interface IPostData extends IPostMeta {
    content: string;
}
