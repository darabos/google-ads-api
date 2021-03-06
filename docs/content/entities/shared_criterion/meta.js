module.exports = {
    name: 'SharedCriterion',
    object: {
        criterion_id: {
            _description: 'Output only. The ID of the criterion. This field is ignored for mutates.',
            _type: 'int64',
        },
        keyword: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Keyword.',
            match_type: {
                _description: 'The match type of the keyword.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                        index: 1,
                    },
                    { s: 'EXACT', description: 'Exact match.', index: 2 },
                    { s: 'PHRASE', description: 'Phrase match.', index: 3 },
                    { s: 'BROAD', description: 'Broad match.', index: 4 },
                ],
                _type: 'enum',
            },
            text: { _description: 'The text of the keyword (at most 80 characters and 10 words).', _type: 'string' },
        },
        mobile_app_category: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Mobile App Category.',
            mobile_app_category_constant: {
                _description: 'The mobile app category constant resource name.',
                _type: 'string',
            },
        },
        mobile_application: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Mobile application.',
            app_id: {
                _description:
                    'A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is "http://itunes.apple.com/us/app/flood-it!-2/id476943146"). For Android, this native identifier is the application\'s package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link "https://play.google.com/store/apps/details?id=com.labpixies.colordrips"). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.',
                _type: 'string',
            },
            name: { _description: 'Name of this mobile application.', _type: 'string' },
        },
        placement: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. Placement.',
            url: { _description: 'URL of the placement. For example, "http://www.domain.com".', _type: 'string' },
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the shared criterion. Shared set resource names have the form: <code>customers/{customer_id}/sharedCriteria/{shared_set_id}~{criterion_id}</code>',
            _type: 'string',
        },
        shared_set: {
            _description: 'Immutable. The shared set to which the shared criterion belongs.',
            _type: 'string',
        },
        type: {
            _description: 'Output only. The type of the criterion.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'KEYWORD', description: "Keyword. e.g. 'mars cruise'.", index: 2 },
                { s: 'PLACEMENT', description: "Placement, aka Website. e.g. 'www.flowers4sale.com'", index: 3 },
                { s: 'MOBILE_APP_CATEGORY', description: 'Mobile application categories to target.', index: 4 },
                { s: 'MOBILE_APPLICATION', description: 'Mobile applications to target.', index: 5 },
                { s: 'DEVICE', description: 'Devices to target.', index: 6 },
                { s: 'LOCATION', description: 'Locations to target.', index: 7 },
                { s: 'LISTING_GROUP', description: 'Listing groups to target.', index: 8 },
                { s: 'AD_SCHEDULE', description: 'Ad Schedule.', index: 9 },
                { s: 'AGE_RANGE', description: 'Age range.', index: 10 },
                { s: 'GENDER', description: 'Gender.', index: 11 },
                { s: 'INCOME_RANGE', description: 'Income Range.', index: 12 },
                { s: 'PARENTAL_STATUS', description: 'Parental status.', index: 13 },
                { s: 'YOUTUBE_VIDEO', description: 'YouTube Video.', index: 14 },
                { s: 'YOUTUBE_CHANNEL', description: 'YouTube Channel.', index: 15 },
                { s: 'USER_LIST', description: 'User list.', index: 16 },
                { s: 'PROXIMITY', description: 'Proximity.', index: 17 },
                {
                    s: 'TOPIC',
                    description: 'A topic target on the display network (e.g. "Pets & Animals").',
                    index: 18,
                },
                { s: 'LISTING_SCOPE', description: 'Listing scope to target.', index: 19 },
                { s: 'LANGUAGE', description: 'Language.', index: 20 },
                { s: 'IP_BLOCK', description: 'IpBlock.', index: 21 },
                { s: 'CONTENT_LABEL', description: 'Content Label for category exclusion.', index: 22 },
                { s: 'CARRIER', description: 'Carrier.', index: 23 },
                { s: 'USER_INTEREST', description: 'A category the user is interested in.', index: 24 },
                { s: 'WEBPAGE', description: 'Webpage criterion for dynamic search ads.', index: 25 },
                { s: 'OPERATING_SYSTEM_VERSION', description: 'Operating system version.', index: 26 },
                { s: 'APP_PAYMENT_MODEL', description: 'App payment model.', index: 27 },
                { s: 'MOBILE_DEVICE', description: 'Mobile device.', index: 28 },
                { s: 'CUSTOM_AFFINITY', description: 'Custom affinity.', index: 29 },
                { s: 'CUSTOM_INTENT', description: 'Custom intent.', index: 30 },
                { s: 'LOCATION_GROUP', description: 'Location group.', index: 31 },
            ],
            _type: 'enum',
        },
        youtube_channel: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. YouTube Channel.',
            channel_id: {
                _description: 'The YouTube uploader channel id or the channel code of a YouTube channel.',
                _type: 'string',
            },
        },
        youtube_video: {
            _oneof: 'criterion',
            _parent_description: 'Immutable. YouTube Video.',
            video_id: { _description: 'YouTube video id as it appears on the YouTube watch page.', _type: 'string' },
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
