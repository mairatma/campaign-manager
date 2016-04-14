'use strict';

var data = {
	campaigns: [
		{
			id: 0,
			name: 'University Credit Card',
			startDate: new Date(2016, 2, 1),
			endDate: new Date(2016, 2, 1),
			budget: 12000,
			goal: {
				'generation': {
					count: 10000,
					deadline: new Date(2016, 1, 3)
				},
				'nurturing': {
					count: 1000,
					deadline: new Date(2016, 1, 3)
				},
				'qualification': {
					count: 500,
					deadline: new Date(2016, 1, 3)
				}
			},
			journey: 1,
			tactics: [
				{
					name: 'Tactics named 0001',
					stages: {
						'generation': true,
						'nurturing': true
					},
					cost: 5000,
					destinationId: 0,
					oneToOnePromos: [
						{
							name: 'New credit card promo for students',
							audienceIds: [0, 1],
							date: new Date(2016, 2, 20)
						},
						{
							name: 'New credit card promo for homeowners',
							audienceIds: [1],
							date: new Date(2016, 2, 22)
						}
					],
					promotionalAds: [
						{
							name: 'Promotion of Liferay before NAS',
							audienceIds: [3, 4],
							bannerIds: [0],
							displayIds: [0, 2]
						}
					]
				}
			],
			influencedCustomers: 100,
			influencedWins: 1500000,
			leadsCount: 125
		},
		{
			id: 1,
			name: 'Promotions for the new iPhone i7',
			startDate: new Date(2016, 2, 12),
			endDate: new Date(2016, 2, 18),
			budget: 9000,
			goal: {
				'generation': {
					count: 9000,
					deadline: new Date(2016, 2, 18)
				},
				'nurturing': {
					count: 1200,
					deadline: new Date(2016, 2, 18)
				},
				'qualification': {
					count: 400,
					deadline: new Date(2016, 2, 18)
				}
			},
			journey: 1,
			tactics: [
			],
			influencedCustomers: 10,
			influencedWins: 10000,
			leadsCount: 22
		}
	],
	destinations: [
		{
			id: 0,
			name: 'Landing Page NAS 2016'
		},
		{
			id: 1,
			name: 'Madrid Symposium Form'
		},
		{
			id: 2,
			name: 'Liferay 7 Training Center'
		},
		{
			id: 3,
			name: 'Building Emotion Medium blog post'
		}
	],
	audiences: [
		{
			id: 0,
			name: 'CMO FinTec',
			description: 'This space is for the description content of the role'
		},
		{
			id: 1,
			name: 'CMO Retail',
			description: 'This space is for the description content of the role'
		},
		{
			id: 2,
			name: 'Italian CEOs Healthcare',
			description: 'This space is for the description content of the role'
		},
		{
			id: 3,
			name: 'Healthcare SysAdmins Europe',
			description: 'This space is for the description content of the role'
		}
	],
	banners: [
		{
			id: 0,
			name: 'NAS 2016',
			type: 1,
			author: 'Bryan Cheung',
			status: 1
		},
		{
			id: 1,
			name: 'Talking about Lexicon',
			type: 1,
			author: 'Juan Hidalgo',
			status: 1
		},
		{
			id: 2,
			name: 'Talking about Lexicon',
			type: 1,
			author: 'Juan Hidalgo',
			status: 1
		}
	],
	displays: [
		{
			id: 0,
			name: 'Home',
			source: 'Westeros Business',
			count: 1,
			sourceType: 0
		},
		{
			id: 1,
			name: 'Contact Us',
			source: 'Westeros Business',
			count: 1,
			sourceType: 0
		},
		{
			id: 2,
			name: 'Home',
			source: 'Westeros Investors',
			count: 1,
			sourceType: 0
		}
	]
};

CM.store.dispatch(CM.Actions.updateState(data));
