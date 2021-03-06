module.exports = {
    name: 'CampaignSharedSet',
    object: {
        campaign: {
            _description: 'Immutable. The campaign to which the campaign shared set belongs.',
            _type: 'string',
        },
        resource_name: {
            _description:
                'Immutable. The resource name of the campaign shared set. Campaign shared set resource names have the form: <code>customers/{customer_id}/campaignSharedSets/{campaign_id}~{shared_set_id}</code>',
            _type: 'string',
        },
        shared_set: {
            _description:
                'Immutable. The shared set associated with the campaign. This may be a negative keyword shared set of another customer. This customer should be a manager of the other customer, otherwise the campaign shared set will exist but have no serving effect. Only negative keyword shared sets can be associated with Shopping campaigns. Only negative placement shared sets can be associated with Display mobile app campaigns.',
            _type: 'string',
        },
        status: {
            _description: 'Output only. The status of this campaign shared set. Read only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.', index: 0 },
                {
                    s: 'UNKNOWN',
                    description: 'Used for return value only. Represents value unknown in this version.',
                    index: 1,
                },
                { s: 'ENABLED', description: 'The campaign shared set is enabled.', index: 2 },
                {
                    s: 'REMOVED',
                    description: 'The campaign shared set is removed and can no longer be used.',
                    index: 3,
                },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
