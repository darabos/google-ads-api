module.exports = {
    name: 'AdGroupBidModifier',
    object: {
        ad_group: { _description: 'Immutable. The ad group to which this criterion belongs.', _type: 'string' },
        base_ad_group: {
            _description:
                'Output only. The base ad group from which this draft/trial adgroup bid modifier was created. If ad_group is a base ad group then this field will be equal to ad_group. If the ad group was created in the draft or trial and has no corresponding base ad group, then this field will be null. This field is readonly.',
            _type: 'string',
        },
        bid_modifier: {
            _description:
                'The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type.',
            _type: 'double',
        },
        bid_modifier_source: {
            _description: 'Output only. Bid modifier source.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                {
                    s: 'CAMPAIGN',
                    description:
                        'The bid modifier is specified at the campaign level, on the campaign\nlevel criterion.',
                    index: 2,
                },
                {
                    s: 'AD_GROUP',
                    description: 'The bid modifier is specified (overridden) at the ad group level.',
                    index: 3,
                },
            ],
            _type: 'enum',
        },
        criterion_id: {
            _description: 'Output only. The ID of the criterion to bid modify. This field is ignored for mutates.',
            _type: 'int64',
        },
        device: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. A device criterion.',
            type: {
                _description: 'Type of the device.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'MOBILE', description: 'Mobile devices with full browsers.', index: 2 },
                    { s: 'TABLET', description: 'Tablets with full browsers.', index: 3 },
                    { s: 'DESKTOP', description: 'Computers.', index: 4 },
                    { s: 'CONNECTED_TV', description: 'Smart TVs and game consoles.', index: 6 },
                    { s: 'OTHER', description: 'Other device types.', index: 5 },
                ],
                _type: 'enum',
            },
        },
        hotel_advance_booking_window: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Criterion for number of days prior to the stay the booking is being made.',
            max_days: { _description: 'High end of the number of days prior to the stay.', _type: 'int64' },
            min_days: { _description: 'Low end of the number of days prior to the stay.', _type: 'int64' },
        },
        hotel_check_in_day: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Criterion for day of the week the booking is for.',
            day_of_week: {
                _description: 'The day of the week.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'MONDAY', description: 'Monday.', index: 2 },
                    { s: 'TUESDAY', description: 'Tuesday.', index: 3 },
                    { s: 'WEDNESDAY', description: 'Wednesday.', index: 4 },
                    { s: 'THURSDAY', description: 'Thursday.', index: 5 },
                    { s: 'FRIDAY', description: 'Friday.', index: 6 },
                    { s: 'SATURDAY', description: 'Saturday.', index: 7 },
                    { s: 'SUNDAY', description: 'Sunday.', index: 8 },
                ],
                _type: 'enum',
            },
        },
        hotel_date_selection_type: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Criterion for hotel date selection (default dates vs. user selected).',
            type: {
                _description: 'Type of the hotel date selection',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'DEFAULT_SELECTION', description: 'Dates selected by default.', index: 50 },
                    { s: 'USER_SELECTED', description: 'Dates selected by the user.', index: 51 },
                ],
                _type: 'enum',
            },
        },
        hotel_length_of_stay: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Criterion for length of hotel stay in nights.',
            max_nights: { _description: 'High end of the number of nights in the stay.', _type: 'int64' },
            min_nights: { _description: 'Low end of the number of nights in the stay.', _type: 'int64' },
        },
        preferred_content: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. A preferred content criterion.',
            type: {
                _description: 'Type of the preferred content.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.', index: 1 },
                    { s: 'YOUTUBE_TOP_CONTENT', description: 'Represents top content on YouTube.', index: 400 },
                ],
                _type: 'enum',
            },
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: <code>customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}</code>',
            _type: 'string',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
