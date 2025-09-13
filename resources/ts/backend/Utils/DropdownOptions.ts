export const genderDropdownItems = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
];

export const maritalStatusDropdownItems = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
];


export const sortableFilterDropdownItems = [
    { value: 'status', label: 'Status' },
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' }
];
export class DropdownOptions {
    static genderOptions() {
        return genderDropdownItems;
    }

    static maritalStatusOptions() {
        return maritalStatusDropdownItems;
    }

    static sortableFilterOptions() {
        return sortableFilterDropdownItems;
    }
}
