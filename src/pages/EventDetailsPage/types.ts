export type GeoCoderResponse = {
    response: Response;
};

export type Response = {
    GeoObjectCollection: GeoObjectCollection;
};

export type GeoObjectCollection = {
    metaDataProperty: GeoObjectCollectionMetaDataProperty;
    featureMember: FeatureMember[];
};

export type FeatureMember = {
    GeoObject: GeoObject;
};

export type GeoObject = {
    metaDataProperty: GeoObjectMetaDataProperty;
    name: string;
    description?: string;
    boundedBy: BoundedBy;
    Point: Point;
};

export type Point = {
    pos: string;
};

export type BoundedBy = {
    Envelope: Envelope;
};

export type Envelope = {
    lowerCorner: string;
    upperCorner: string;
};

export type GeoObjectMetaDataProperty = {
    GeocoderMetaData: GeocoderMetaData;
};

export type GeocoderMetaData = {
    precision: string;
    text: string;
    kind: string;
    Address: Address;
    AddressDetails: AddressDetails;
};

export type Address = {
    country_code: string;
    formatted: string;
    postal_code?: string;
    Components: Component[];
};

export type Component = {
    kind: string;
    name: string;
};

export type AddressDetails = {
    Country: Country;
};

export type Country = {
    AddressLine: string;
    CountryNameCode: string;
    CountryName: string;
    AdministrativeArea?: AdministrativeArea;
};

export type AdministrativeArea = {
    AdministrativeAreaName: string;
    Locality?: Locality;
};

export type Locality = {
    LocalityName: string;
    Thoroughfare?: Thoroughfare;
    Premise?: LocalityPremise;
    DependentLocality?: LocalityDependentLocality;
};

export type LocalityDependentLocality = {
    DependentLocalityName: string;
    DependentLocality?: DependentLocalityDependentLocality;
};

export type DependentLocalityDependentLocality = {
    DependentLocalityName: string;
};

export type LocalityPremise = {
    PremiseName: string;
};

export type Thoroughfare = {
    ThoroughfareName: string;
    Premise?: ThoroughfarePremise;
};

export type ThoroughfarePremise = {
    PremiseNumber: string;
    PostalCode: PostalCode;
};

export type PostalCode = {
    PostalCodeNumber: string;
};

export type GeoObjectCollectionMetaDataProperty = {
    GeocoderResponseMetaData: GeocoderResponseMetaData;
};

export type GeocoderResponseMetaData = {
    Point: Point;
    request: string;
    results: string;
    found: string;
};
