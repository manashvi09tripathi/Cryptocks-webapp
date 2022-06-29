import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'jltr53bj',
  dataset: 'production',
  apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
  token:"skyltWQfQwipNkOLp8406ZvoBuxGsGMaehOcfhpL6yNSxSSP7WvMJZqMqEKj2SSdI20SKM93hxkIQ36mRLdhWr5wcdADBfJhi176xdTIKHqihBQbN1yZlJaol64ighgVXzdmIAtDNVNz1G28kJG4uT7GEVDsChJSTHJbhujT5wHWW53DgkNQ",
  useCdn:false,
})